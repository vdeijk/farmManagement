import { mockLocalStorage } from '../../../auxiliary/utils/mockLocalStorage';
import { vi } from 'vitest';
import testStore from './TestStore';

Object.defineProperty(global, 'localStorage', {
  value: mockLocalStorage,
  writable: true,
});

describe('TestStore', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(localStorage, 'setItem');
    vi.spyOn(localStorage, 'getItem');
  });

  it('should initialize with useRealData set to false', () => {
    expect(testStore.useRealData).toBe(false);
  });

  it('should set useRealData and store it in localStorage', () => {
    testStore.setUseRealData(true);
    expect(testStore.useRealData).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('useRealData', 'true');
  });

  it('should load useRealData from localStorage', () => {
    vi.spyOn(localStorage, 'getItem').mockReturnValue('true');
    testStore.loadFromLocalStorage();
    expect(testStore.useRealData).toBe(true);
  });
});
