%ECE366 Mini Project 2 Problem 2 - Krishanga
clear all; clc;

[x, Fs] = audioread('mp2_p2_original.wav');

% Part a)
t = (0:length(x)-1)/Fs;   % time vector

figure;
plot(t, x);
xlabel('Time (s)');
ylabel('x(t)');
title('Recorded Voice Signal x(t)');
grid on;

% Part b)
[X, w_axis, f_axis] = ctft(x', Fs);  

figure;
plot(f_axis, abs(X));
xlabel('Frequency (Hz)');
ylabel('|X(j\omega)|');
title('CTFT Magnitude of Recorded Voice Signal |X(j\omega)|');
grid on;


% Part d)
fs_samp = 16000;     % sampling rate
Ts = 1/fs_samp;

s = zeros(size(x'))';                   % Impulse train from Problem 1
sample_n = round((0:Ts:t(end)) * Fs) + 1;
sample_n(sample_n > length(x)) = [];
s(sample_n) = 1;

xs = x .* s;   

[Xs, w_samp, f_samp] = ctft(xs', Fs);

figure;
plot(f_samp, abs(Xs));
xlabel('Frequency (Hz)');
ylabel('|X_s(j\omega)|');
title('CTFT Magnitude of Sampled Signal x_s(t), f_s = 16000 Hz');
grid on;

% Part e)
fc = 8000;         % This is half of the 16000 sampling frequency
lpf_N = 20000;
lpft = linspace(-lpf_N/(2*Fs), lpf_N/(2*Fs), lpf_N);

hLPF = 2 * fc * sinc(2 * fc * lpft);    % this is the LPF from problem 1
[HLPF, w_lpf, f_lpf] = ctft(hLPF, Fs);

xr_full = conv(xs, hLPF);    % This section is identical to how the convolution was computed in problem 1

mid = floor(length(hLPF)/2);
xr = xr_full(mid : mid + length(xs) - 1) * (1/fs_samp);  

figure;
plot(t, xr(1:length(t)));
xlabel('Time (s)');
ylabel('x_r(t)');
title('Reconstructed Voice Signal x_r(t) at f_s = 16000 Hz');
grid on;

[Xr, w_r, f_r] = ctft(xr', Fs);

figure;
plot(f_r, abs(Xr));
xlabel('Frequency (Hz)');
ylabel('|X_r(j\omega)|');
title('CTFT of Reconstructed Voice Signal x_r(t)');
grid on;

xr_audio = xr / max(abs(xr));   % saving the audio 
audiowrite('mp2_p2_reconstructed1.wav', xr_audio, Fs);

soundsc(xr_audio, Fs);

% Part f)
fs_Nyquist = 8000;                 
Ts = 1/fs_Nyquist;

t = (0:length(x)-1)/Fs;    % code copied from (d) to (e)

s = zeros(size(x));
sample_n = round((0:Ts:t(end)) * Fs) + 1;
sample_n(sample_n > length(x)) = [];
s(sample_n) = 1;

xs2 = x .* s;

[Xs2, w_samp2, f_samp2] = ctft(xs2, fs_Nyquist);

figure;
plot(f_samp2, abs(Xs2));
xlabel('Frequency (Hz)');
ylabel('|X_s(j\omega)|');
title('CTFT Magnitude of x_s(t) at Nyquist Rate');
grid on;

fc2 = fs_Nyquist / 2;
lpf_N = 20000;

lpft2 = linspace(-lpf_N/(2*fs_Nyquist), lpf_N/(2*fs_Nyquist), lpf_N);
hLPF2 = 2 * fc2 * sinc(2 * fc2 * lpft2);

xr2_full = conv(xs2, hLPF2);

mid2 = floor(length(hLPF2)/2);
xr2 = xr2_full(mid2 : mid2 + length(xs2) - 1) * (1/fs_Nyquist);

figure;
plot(t, xr2(1:length(t)));
xlabel('Time (s)');
ylabel('x_r(t)');
title('Reconstructed Voice Signal at Nyquist Rate');
grid on;

[Xr2, w_r2, f_r2] = ctft(xr2, fs_Nyquist);

figure;
plot(f_r2, abs(Xr2));
xlabel('Frequency (Hz)');
ylabel('|X_r(j\omega)|');
title('CTFT of Reconstructed Signal (Nyquist Rate)');
grid on;

xr2_audio = xr2 / max(abs(xr2));
audiowrite('mp2_p2_reconstructed2.wav', xr2_audio, fs_Nyquist);

soundsc(xr2_audio, fs_Nyquist);
 
% Part g)
fs_half = fs_Nyquist / 2;          % half-Nyquist sampling rate
Ts = 1/fs_half;

s = zeros(size(x));
sample_n = round((0:Ts:t(end)) * Fs) + 1;
sample_n(sample_n > length(x)) = [];
s(sample_n) = 1;

xs3 = x .* s;

[Xs3, w_samp3, f_samp3] = ctft(xs3, fs_half);

figure;
plot(f_samp3, abs(Xs3));
xlabel('Frequency (Hz)');
ylabel('|X_s(j\omega)|');
title('CTFT Magnitude of x_s(t) at Half-Nyquist Rate');
grid on;

fc3 = fs_half / 2;
lpft3 = linspace(-lpf_N/(2*fs_half), lpf_N/(2*fs_half), lpf_N);
hLPF3 = 2 * fc3 * sinc(2 * fc3 * lpft3);

xr3_full = conv(xs3, hLPF3);

mid3 = floor(length(hLPF3)/2);
xr3 = xr3_full(mid3 : mid3 + length(xs3) - 1) * (1/fs_half);

figure;
plot(t, xr3(1:length(t)));
xlabel('Time (s)');
ylabel('x_r(t)');
title('Reconstructed Voice Signal at Half-Nyquist Rate');
grid on;

[Xr3, w_r3, f_r3] = ctft(xr3, fs_half);

figure;
plot(f_r3, abs(Xr3));
xlabel('Frequency (Hz)');
ylabel('|X_r(j\omega)|');
title('CTFT of Reconstructed Signal (Half-Nyquist)');
grid on;

xr3_audio = xr3 / max(abs(xr3));
audiowrite('mp2_p2_reconstructed3.wav', xr3_audio, fs_half);

soundsc(xr3_audio, fs_half);
