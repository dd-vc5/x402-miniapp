'use client';

import { Page } from '@/components/PageLayout';
import { ImageCropper } from '@/components/ImageCropper';
import { GradientPicker } from '@/components/GradientPicker';
import { type Category } from '@/data/mockData';
import { ArrowLeft, Upload, Xmark } from 'iconoir-react';
import { useRouter } from 'next/navigation';
import { useState, useRef } from 'react';

export default function CreateDataPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    price: '',
    category: 'sports' as Category,
    bgImage: '',
  });

  const defaultGradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  const [bgImage, setBgImage] = useState<string>(defaultGradient);
  const [selectedGradient, setSelectedGradient] = useState<string>(defaultGradient);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [showCropper, setShowCropper] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string>('');
  const [showGradientPicker, setShowGradientPicker] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setImageToCrop(imageUrl);
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropComplete = (croppedImage: string) => {
    setBgImage(`url(${croppedImage})`);
    setShowCropper(false);
    setImageToCrop('');
  };

  const handleCancelCrop = () => {
    setShowCropper(false);
    setImageToCrop('');
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveImage = () => {
    setBgImage(selectedGradient);
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleGradientSelect = (gradient: string) => {
    setSelectedGradient(gradient);
    if (!imageFile) {
      setBgImage(gradient);
    }
    setShowGradientPicker(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the data
    alert('Data listing created!');
    router.push('/home');
  };

  return (
    <Page>
      <Page.Main className="pb-8 max-w-md mx-auto">
        {/* Header - Secondary page: 24px padding, 24px space to content */}
        <div className="px-6 pt-6 flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-white/50 dark:hover:bg-[#1c1c1e]/50 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-[#1d1d1f] dark:text-[#f5f5f7]" />
          </button>
          <h1 className="text-[28px] font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">
            Create Listing
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="px-6 mt-6 space-y-6">
          {/* Background Image Upload - App Store Style */}
          <div className="bg-white dark:bg-[#1c1c1e] rounded-3xl p-5 shadow-sm">
            <label className="block text-[17px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-3">
              Cover Image
            </label>
            
            <div className="relative group">
              <div
                className="h-48 w-full rounded-2xl mb-3 overflow-hidden relative"
                style={{
                  background: bgImage,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {!imageFile && (
                  <div className="absolute inset-0" style={{ background: selectedGradient }} />
                )}
                {imageFile && (
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors z-10"
                  >
                    <Xmark className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <div className="flex gap-2 mb-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#007aff] dark:bg-[#0a84ff] text-white rounded-xl font-semibold text-[15px] cursor-pointer hover:bg-[#0051d5] dark:hover:bg-[#409cff] transition-colors active:scale-95"
                >
                  <Upload className="w-5 h-5" />
                  {imageFile ? 'Change' : 'Upload'}
                </label>
                <button
                  type="button"
                  onClick={() => setShowGradientPicker(!showGradientPicker)}
                  className="flex-1 py-3 px-4 bg-white dark:bg-[#2c2c2e] border border-[#d2d2d7] dark:border-[#38383a] text-[#1d1d1f] dark:text-[#f5f5f7] rounded-xl font-semibold text-[15px] hover:bg-[#f5f5f7] dark:hover:bg-[#1c1c1e] transition-colors active:scale-95"
                >
                  Gradient
                </button>
              </div>

              {showGradientPicker && (
                <div className="mb-3">
                  <GradientPicker
                    selectedGradient={selectedGradient}
                    onSelect={handleGradientSelect}
                  />
                </div>
              )}
            </div>
            
            <p className="text-[13px] text-[#86868b] dark:text-[#98989d] mt-2">
              Upload an image or choose a gradient
            </p>
          </div>

          {/* Title - Big with placeholder only */}
          <div className="bg-white dark:bg-[#1c1c1e] rounded-3xl p-6 shadow-sm">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-0 py-0 bg-transparent border-none text-[28px] font-bold text-[#1d1d1f] dark:text-[#f5f5f7] placeholder:text-[#86868b] dark:placeholder:text-[#98989d] focus:outline-none"
              placeholder="Title"
              required
            />
          </div>

          {/* Description - Big with placeholder only */}
          <div className="bg-white dark:bg-[#1c1c1e] rounded-3xl p-6 shadow-sm">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-0 py-0 bg-transparent border-none text-[20px] text-[#1d1d1f] dark:text-[#f5f5f7] placeholder:text-[#86868b] dark:placeholder:text-[#98989d] focus:outline-none resize-none leading-relaxed"
              placeholder="Description"
              rows={4}
              required
            />
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-[#1c1c1e] rounded-3xl p-5 shadow-sm">
            <label className="block text-[17px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-3">
              Content
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-[#d2d2d7] dark:border-[#38383a] rounded-xl text-[17px] text-[#1d1d1f] dark:text-[#f5f5f7] placeholder:text-[#86868b] dark:placeholder:text-[#98989d] focus:outline-none focus:ring-2 focus:ring-[#007aff] dark:focus:ring-[#0a84ff] resize-none"
              placeholder="Enter full content/data"
              rows={5}
              required
            />
          </div>

          {/* Category & Price Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Category */}
            <div className="bg-white dark:bg-[#1c1c1e] rounded-3xl p-5 shadow-sm">
              <label className="block text-[17px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-3">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-[#d2d2d7] dark:border-[#38383a] rounded-xl text-[17px] text-[#1d1d1f] dark:text-[#f5f5f7] focus:outline-none focus:ring-2 focus:ring-[#007aff] dark:focus:ring-[#0a84ff]"
                required
              >
                <option value="sports">Sports</option>
                <option value="read">Read</option>
                <option value="finance">Finance</option>
                <option value="crypto">Crypto</option>
                <option value="business">Business</option>
                <option value="tech">Tech</option>
                <option value="ai">AI</option>
                <option value="travel">Travel</option>
              </select>
            </div>

            {/* Price */}
            <div className="bg-white dark:bg-[#1c1c1e] rounded-3xl p-5 shadow-sm">
              <label className="block text-[17px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-3">
                Price
              </label>
              <div className="relative">
                {/* <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[17px] text-[#86868b] dark:text-[#98989d] font-medium">
                  $
                </span> */}
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full pl-8 pr-4 py-3 bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-[#d2d2d7] dark:border-[#38383a] rounded-xl text-[17px] text-[#1d1d1f] dark:text-[#f5f5f7] placeholder:text-[#86868b] dark:placeholder:text-[#98989d] focus:outline-none focus:ring-2 focus:ring-[#007aff] dark:focus:ring-[#0a84ff]"
                  placeholder="0.00 $"
                  step="0.01"
                  min="0"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Buttons - 24px from keyboard, 32px space to bottom bar */}
          <div className="flex gap-3 pt-2 pb-8 mb-16">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 py-4 px-6 bg-white dark:bg-[#1c1c1e] border border-[#d2d2d7] dark:border-[#38383a] text-[#1d1d1f] dark:text-[#f5f5f7] rounded-xl font-semibold text-[17px] hover:bg-[#f5f5f7] dark:hover:bg-[#2c2c2e] transition-colors active:scale-95"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-4 px-6 bg-[#007aff] dark:bg-[#0a84ff] text-white rounded-xl font-bold text-[17px] hover:bg-[#0051d5] dark:hover:bg-[#409cff] transition-colors active:scale-95 shadow-sm mb"
            >
              List Data
            </button>
          </div>
        </form>

        {/* Image Cropper Modal */}
        {showCropper && (
          <ImageCropper
            image={imageToCrop}
            onCropComplete={handleCropComplete}
            onCancel={handleCancelCrop}
            aspectRatio={16 / 9}
          />
        )}
      </Page.Main>
    </Page>
  );
}

