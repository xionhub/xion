export type FunnelCoreConstructor = {
  safeLocation: () => Location;
  safeHistory: () => History;
};

export class FunnelCore {
  private safeLocation: FunnelCoreConstructor['safeLocation'];
  private safeHistory: FunnelCoreConstructor['safeHistory'];

  constructor({ safeLocation, safeHistory }: FunnelCoreConstructor) {
    this.safeLocation = safeLocation;
    this.safeHistory = safeHistory;
  }

  createNextStep(queryKey: string, queryValue: string) {
    const location = this.safeLocation();
    const path = location.pathname;
    return `${path}?${queryKey}=${queryValue}`;
  }

  pushNextStepState(queryKey: string, queryValue: string) {
    return this.safeHistory().pushState(
      '',
      '',
      this.createNextStep(queryKey, queryValue),
    );
  }
  replaceNextStepState(queryKey: string, queryValue: string) {
    return this.safeHistory().replaceState(
      '',
      '',
      this.createNextStep(queryKey, queryValue),
    );
  }
}
