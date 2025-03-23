import plantsStore from './PlantsStore';
import { vi } from 'vitest';

vi.mock('../../apis/plants', () => ({
  getPlantData: vi.fn(),
}));

describe('PlantsStore', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with an empty plants array and loading set to false', () => {
    expect(plantsStore.plants).toEqual([]);
    expect(plantsStore.isLoading).toBe(false);
  });
});
