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
    const host = location.hostname;
    const path = location.pathname;
    return `${host}${path}?${queryKey}=${queryValue}`;
  }
}
