'use client';

import { Page } from '@/components/PageLayout';
import { ArrowLeft } from 'iconoir-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateDataPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    price: '',
    category: 'sports' as 'sports' | 'read',
    bgImage: '',
  });

  const defaultGradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  const [bgImage, setBgImage] = useState<string>(defaultGradient);
  const [imageFile, setImageFile] = useState<File | null>(null);

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
        setBgImage(`url(${reader.result})`);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the data
    alert('Data listing created!');
    router.push('/home');
  };

  return (
    <Page>
      <Page.Main className="pb-24 max-w-md mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="btn btn-ghost btn-sm mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <h1 className="text-2xl font-bold mb-6">Create Data Listing</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Background Image Upload */}
          <div className="card bg-base-100 shadow-md p-4">
            <label className="label">
              <span className="label-text font-semibold">Background Image</span>
            </label>
            <div
              className="h-32 w-full rounded-lg mb-2 border-2 border-dashed border-base-300 flex items-center justify-center"
              style={{
                background: bgImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {!imageFile && (
                <span className="text-base-content/50 text-sm">Default Gradient</span>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="file-input file-input-bordered file-input-sm w-full"
            />
            <label className="label">
              <span className="label-text-alt text-base-content/60">
                Upload an image or use the default gradient
              </span>
            </label>
          </div>

          {/* Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Title</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="input input-bordered"
              placeholder="Enter data title"
              required
            />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Description</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="textarea textarea-bordered"
              placeholder="Enter description"
              rows={3}
              required
            />
          </div>

          {/* Content */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Content</span>
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="textarea textarea-bordered"
              placeholder="Enter full content/data"
              rows={5}
              required
            />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="select select-bordered"
              required
            >
              <option value="sports">Sports</option>
              <option value="read">Read</option>
            </select>
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <div className="input-group">
              <span>$</span>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="input input-bordered flex-1"
                placeholder="0.00"
                step="0.01"
                min="0"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-2 pt-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="btn btn-outline flex-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary flex-1"
            >
              List Data
            </button>
          </div>
        </form>
      </Page.Main>
    </Page>
  );
}

