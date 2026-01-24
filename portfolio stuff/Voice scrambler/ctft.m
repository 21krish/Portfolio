function [X,w,f] = ctft(x,f_s)
%CTFT Function that returns the Continuous-time Fourier Transform (CTFT) of the
%signal contained in the vector x. 
%   Inputs: x - vector containing the signal
%           f_s - frequency spacing (in Hz)
%   Outputs: X - vector containing the CTFT of x (complex in general)
%            w - vector indicating the angular frequencies (in rad/sec) where the CTFT
%            was computed 
%            f - vector indicating the linear frequencies (in Hz) where the
%            CTFT was computed
%   ECE 366 - Fall 2025. Panagiotis Traganitis

T_s = 1/f_s;
N  = length(x);

X = fft(x,N);

X = fftshift(X).*T_s;

k = -N/2:N/2 - 1; 

f = k*f_s./N;
w = 2*pi*f;

X = X.*(w(2)-w(1)); %fixing area

end