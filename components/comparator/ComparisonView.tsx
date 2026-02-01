'use client';

import { useState, useEffect } from 'react';
import { DesignSystem, ComponentName } from '@/lib/types/design-systems';
import { SystemSelector } from './SystemSelector';
import { ComponentSelector } from './ComponentSelector';
import { ComparisonPanel } from './ComparisonPanel';
import { ThemeToggle } from './ThemeToggle';
import '@/styles/comparator.css';

export function ComparisonView() {
  const [selectedSystems, setSelectedSystems] = useState<DesignSystem[]>([
    'shadcn',
    'mui',
  ]);
  const [selectedComponents, setSelectedComponents] = useState<ComponentName[]>([
    'Button',
  ]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleComponentToggle = (component: ComponentName) => {
    setSelectedComponents((prev) => {
      if (prev.includes(component)) {
        return prev.filter((c) => c !== component);
      }
      return [...prev, component];
    });
  };

  return (
    <div className="comparison-view">
      <header className={`comparison-sticky-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="header-inner">
          <div className="header-content">
            <div className="header-main">
              <SystemSelector
                selected={selectedSystems}
                onChange={setSelectedSystems}
              />
            </div>

            <div className="header-secondary">
              <ComponentSelector
                selected={selectedComponents}
                onChange={handleComponentToggle}
              />
            </div>
          </div>
          <div className="header-actions">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {selectedSystems.length === 0 ? (
        <div className="flex items-center justify-center flex-1 text-muted-foreground pt-20">
          <p>Select at least one design system to start comparing</p>
        </div>
      ) : (
        <div
          className="comparison-grid"
          data-systems={selectedSystems.length.toString()}
        >
          {selectedSystems.map((system) => (
            <ComparisonPanel
              key={system}
              system={system}
              components={selectedComponents}
            />
          ))}
        </div>
      )}
    </div>
  );
}
