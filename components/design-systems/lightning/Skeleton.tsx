'use client';

import { UniversalSkeletonProps } from '@/lib/types/component-props';

export default function Skeleton({
  width = '100%',
  height = 20,
  variant = 'rectangular',
}: UniversalSkeletonProps) {
  return (
    <div 
      className="slds-skeleton" 
      style={{ 
        width, 
        height,
        borderRadius: variant === 'circular' ? '50%' : '4px'
      }}
    >
      <div className="slds-skeleton__shape" />
    </div>
  );
}
