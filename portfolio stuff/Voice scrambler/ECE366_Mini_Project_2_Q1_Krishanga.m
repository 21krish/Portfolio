% ECE366 Mini Project 2 Problem 1 - Krishanga
clear all; clc;

% Part a)
t = 0:1/96000:3;     %Created time span with specified spacing
w = 2*pi*1000;       % This is the angular frequency
t_plot = 0:1/96000:0.015; % This span was created to plot only 15ms
plot(t_plot,cos(w*t_plot))

% Part c)
x = cos(w*t);  %specified x(t)
[X, w_axis, f_axis] = ctft(x, 96000);
figure;
plot(f_axis, abs(X));
grid on;
xlabel('Frequency (Hz)');
ylabel('|X(j\omega)|');
title('Magnitude of CTFT |X(j\omega)| vs Frequency (Hz)');

% Part d)
fs_samp = 8000;               % specified sample frequency and period
Ts = 1/fs_samp;

s = zeros(size(t));                        %Created a list of zeros equal to the span of t from part a)
sample_n = round((0:Ts:3) * 96000) + 1;    % This creates the number of sampling points
sample_n(sample_n > length(t)) = [];        % If the length of the span is exceeded then it will not contain a value
s(sample_n) = 1;                   % At each of the sample points a 1 is added in the list of zeros 

xs = x .* s;    
    
figure;
plot(t_plot, xs(1:length(t_plot)), 'o-');
xlabel('Time (s)'); ylabel('x_s(t)');
title('15 ms of sampled signal x_s(t) at f_s = 8000 Hz');
grid on;

% Part f)
[Xs, w_axis2, f_axis2] = ctft(xs, 96000);

figure;
plot(f_axis2, abs(Xs));
xlabel('Frequency (Hz)'); ylabel('|X_s(j\omega)|');
title('CTFT Magnitude of sampled signal x_s(t), f_s = 8000 Hz');
grid on;

% Part g)
fc = 4000;  

lpf_N = 20000;                     %This defines the cutoff frequency and the number of points
lpft = linspace(-lpf_N/(2*96000), lpf_N/(2*96000), lpf_N);  %A span of values were created from the negative half to the positive half to center it at 0

hLPF = 2 * fc * sinc(2 * fc * lpft); % I multiplied by 1/96000 since it seems to have issues with the scaling when plotting the funciton.

figure;
plot(lpft, hLPF);
xlabel('Time (s)'); ylabel('h_{LPF}(t)');
title('Low-Pass Filter Impulse Response');
grid on;

[HLPF, w_lpf, f_lpf] = ctft(hLPF, 96000);

figure;
plot(w_lpf, abs(HLPF));
xlabel('Frequency (Hz)'); ylabel('|H_{LPF}(j\omega)|');
title('Magnitude of LPF Frequency Response |H_{LPF}(j\omega)|');
grid on;

% Part h)
xr_full = conv(xs, hLPF);  % This proves the entire convolution but the questions specifies only the center part is required

% To keep the center part the xr is taking the signal from the mid point of
% the length of the hLPF and until the end of the signal. The -1 is to
% account for extra the sample point at the end.

mid = floor(length(hLPF)/2);
xr = xr_full(mid : mid + length(xs) - 1)* 1/8000;    %This 1/8000 is to account for the scaling

figure;
plot(t_plot, xr(1:length(t_plot)));   % the 1:length(t_plot) is to ensure only 15ms is plotted
xlabel('Time (s)');
ylabel('x_r(t)');
title('Reconstructed Signal x_r(t) at f_s = 8000 Hz');
grid on;

[Xr, w_r, f_r] = ctft(xr, 96000);     

figure;
plot(f_r, abs(Xr));
xlabel('Frequency (Hz)');
ylabel('|X_r(j\omega)|');
title('CTFT of Reconstructed Signal (f_s = 8000 Hz)');
grid on;

% Part i)
fs_list = [3000, 2000, 500];                                             

for fs_i = fs_list         % The same code from the previous subparts were copy pasted into this for loop since this is simpler than copy-pasting and editing numerous times.
    
    fc_i = fs_i / 2;        % This defines an LPF cutoff that is reasonable for all 3 frequencies (1500, 1000 and 250)Hz respectively.
    lpft_i = linspace(-lpf_N/(2*96000), lpf_N/(2*96000), lpf_N); %Same code to create the LPFs
    hLPF_i = 2 * fc_i * sinc(2 * fc_i * lpft_i);

    figure;
    plot(lpft_i, hLPF_i);
    xlabel('Time (s)'); ylabel('h_{LPF}(t)');
    title(sprintf('LPF Impulse Response for f_s = %d Hz (f_c = %d Hz)', fs_i, fc_i));
    grid on;

    [HLPF_i, w_lpf_i, f_lpf_i] = ctft(hLPF_i, 96000);
    figure;
    plot(f_lpf_i, abs(HLPF_i));
    xlabel('Frequency (Hz)'); ylabel('|H_{LPF}(j\omega)|');
    title(sprintf('LPF Magnitude Response for f_s = %d Hz', fs_i));
    grid on;

    % Same code to create the sampled signals

    Ts_i = 1/fs_i;

    s_i = zeros(size(t));                                                     
    sample_n_i = round((0:Ts_i:3) * 96000) + 1;
    sample_n_i(sample_n_i > length(t)) = [];
    s_i(sample_n_i) = 1;

    xs_i = x .* s_i;

    figure;
    plot(t_plot, xs_i(1:length(t_plot)), 'o-');
    xlabel('Time (s)'); ylabel('x_s(t)');
    title(sprintf('15 ms of sampled signal x_s(t) at f_s = %d Hz', fs_i));
    grid on;

    [Xs_i, ~, fXs_i] = ctft(xs_i, 96000);
    figure;
    plot(fXs_i, abs(Xs_i));
    xlabel('Frequency (Hz)'); ylabel('|X_s(j\\omega)|');
    title(sprintf('CTFT of Sampled Signal x_s(t), f_s = %d Hz', fs_i));
    grid on;

    % Same code for convolution 

    xr_full_i = conv(xs_i, hLPF_i);

    mid_i = floor(length(hLPF_i)/2);
    xr_i = xr_full_i(mid_i : mid_i + length(xs_i) - 1) * (1/fs_i);   

    figure;
    plot(t_plot, xr_i(1:length(t_plot)));
    xlabel('Time (s)'); ylabel('x_r(t)');
    title(sprintf('Reconstructed Signal x_r(t) at f_s = %d Hz', fs_i));
    grid on;

    [Xr_i, ~, f_r_i] = ctft(xr_i, 96000);
    figure;
    plot(f_r_i, abs(Xr_i));
    xlabel('Frequency (Hz)');
    ylabel('|X_r(j\omega)|');
    title(sprintf('CTFT of Reconstructed Signal (f_s = %d Hz)', fs_i));
    grid on;

end


