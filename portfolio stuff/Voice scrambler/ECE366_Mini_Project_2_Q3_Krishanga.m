% ECE366 Mini Project 2 Problem 3 - Krishanga
clear all; clc;

[x, Fs] = audioread('mp2_p2_original.wav');
x_audio = x/ max(abs(x));
x = x(:);                  % make it a column vector
t = (0:length(x)-1)' / Fs;

B = 2000;

% Part a)

N = 20000;                                  
t_h = linspace(-N/(2*Fs), N/(2*Fs), N);  % This is the same method the span was created in Q1 and Q2.

h = 2*B * sinc(2*B*t_h);

x_mod = 2 * x .* cos(2*pi*B*t);  % Modulated input

y = conv(x_mod, h, 'same');     % convulution

figure;
subplot(2,1,1);
plot(t, x);
xlabel('Time (s)'); 
ylabel('x(t)');
title('Original Signal x(t)');
grid on;

subplot(2,1,2);
plot(t, y);
xlabel('Time (s)'); 
ylabel('y(t)');
title('Scrambled Signal y(t)');
grid on;

y_audio = y / max(abs(y));  % same audio saving code
audiowrite('mp2_p3_scrambled.wav', y_audio, Fs);
soundsc(y_audio, Fs);

% Part b) 

[Y, w_y, f_y] = ctft(y, Fs);   

figure;
plot(f_y, abs(Y));
xlabel('Frequency (Hz)');
ylabel('|Y(j\omega)|');
title('Magnitude Spectrum of Scrambled Signal Y(j\omega)');
grid on;

% Part c)

y_mod = 2 * y .* cos(2*pi*B*t);   %This is the same code as part a) to modulate but replaced with the modulated signal to demodulate
z = conv(y_mod, h, 'same');

figure;
plot(t, z);
xlabel('Time (s)'); 
ylabel('z(t)');
title('Unscrambled Signal z(t)');
grid on;

z_audio = z / max(abs(z));
audiowrite('mp2_p3_unscrambled.wav', z_audio, Fs);
soundsc(z_audio, Fs);

% Part d)

[Z, w_z, f_z] = ctft(z, Fs);
[Xspec, w_x, f_x] = ctft(x, Fs);

figure;
plot(f_z, abs(Z));
xlabel('Frequency (Hz)');
ylabel('Magnitude');
title('|Z(j\omega)| spectrum');
grid on;

% SNR ratio
SNR_dB = 10 * log10(mean(x_audio.^2) / mean((x_audio - z_audio).^2));
fprintf('SNR: %.2f dB\n', SNR_dB);