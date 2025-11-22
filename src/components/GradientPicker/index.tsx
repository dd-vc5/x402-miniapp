'use client';

interface GradientPickerProps {
  selectedGradient: string;
  onSelect: (gradient: string) => void;
}

const gradients = [
  { name: 'Purple', value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  { name: 'Pink', value: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  { name: 'Blue', value: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
  { name: 'Green', value: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
  { name: 'Orange', value: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
  { name: 'Teal', value: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)' },
  { name: 'Peach', value: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
  { name: 'Sunset', value: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' },
  { name: 'Ocean', value: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)' },
  { name: 'Rose', value: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)' },
  { name: 'Lavender', value: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)' },
  { name: 'Sky', value: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)' },
];

export const GradientPicker = ({ selectedGradient, onSelect }: GradientPickerProps) => {
  return (
    <div className="space-y-3">
      <p className="text-[13px] text-[#86868b] dark:text-[#98989d] font-medium">
        Choose a gradient
      </p>
      <div className="grid grid-cols-4 gap-3">
        {gradients.map((gradient) => (
          <button
            key={gradient.value}
            type="button"
            onClick={() => onSelect(gradient.value)}
            className={`relative h-16 rounded-xl overflow-hidden transition-all ${
              selectedGradient === gradient.value
                ? 'ring-2 ring-[#007aff] dark:ring-[#0a84ff] ring-offset-2'
                : 'hover:scale-105'
            }`}
            style={{ background: gradient.value }}
          >
            {selectedGradient === gradient.value && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#007aff]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

