'use client';

import { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { Xmark, CheckCircleSolid } from 'iconoir-react';
import type { Area, Point } from 'react-easy-crop';

interface ImageCropperProps {
  image: string;
  onCropComplete: (croppedImage: string) => void;
  onCancel: () => void;
  aspectRatio?: number;
}

export const ImageCropper = ({ 
  image, 
  onCropComplete, 
  onCancel,
  aspectRatio = 16 / 9 
}: ImageCropperProps) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropChange = useCallback((crop: Point) => {
    setCrop(crop);
  }, []);

  const onZoomChange = useCallback((zoom: number) => {
    setZoom(zoom);
  }, []);

  const onCropCompleteCallback = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener('load', () => resolve(image));
      image.addEventListener('error', (error) => reject(error));
      image.src = url;
    });

  const getCroppedImg = async (
    imageSrc: string,
    pixelCrop: Area
  ): Promise<string> => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error('No 2d context');
    }

    // Set canvas size to the cropped area
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    // Draw the cropped portion of the image
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          resolve('');
          return;
        }
        const url = URL.createObjectURL(blob);
        resolve(url);
      }, 'image/jpeg', 0.95);
    });
  };

  const handleDone = async () => {
    if (!croppedAreaPixels) return;
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      onCropComplete(croppedImage);
    } catch (e) {
      console.error('Error cropping image:', e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#1c1c1e] rounded-3xl overflow-hidden w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#d2d2d7] dark:border-[#38383a]">
          <button
            onClick={onCancel}
            className="p-2 hover:bg-[#f5f5f7] dark:hover:bg-[#2c2c2e] rounded-full transition-colors"
          >
            <Xmark className="w-6 h-6 text-[#1d1d1f] dark:text-[#f5f5f7]" />
          </button>
          <h3 className="text-[17px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
            Crop Image
          </h3>
          <button
            onClick={handleDone}
            className="p-2 hover:bg-[#f5f5f7] dark:hover:bg-[#2c2c2e] rounded-full transition-colors"
          >
            <CheckCircleSolid className="w-6 h-6 text-[#007aff] dark:text-[#0a84ff]" />
          </button>
        </div>

        {/* Cropper */}
        <div className="relative w-full h-96 bg-black">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={aspectRatio}
            onCropChange={onCropChange}
            onZoomChange={onZoomChange}
            onCropComplete={onCropCompleteCallback}
            cropShape="rect"
            showGrid={true}
            style={{
              containerStyle: {
                width: '100%',
                height: '100%',
                position: 'relative',
              },
            }}
          />
        </div>

        {/* Controls */}
        <div className="p-4 space-y-4">
          <div>
            <label className="block text-[13px] font-medium text-[#86868b] dark:text-[#98989d] mb-2">
              Zoom
            </label>
            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-full h-2 bg-[#d2d2d7] dark:bg-[#38383a] rounded-lg appearance-none cursor-pointer accent-[#007aff] dark:accent-[#0a84ff]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

