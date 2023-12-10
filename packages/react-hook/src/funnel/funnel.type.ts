export type NonEmptyArray<T> = readonly [T, ...T[]];

export interface FunnelProps<Steps extends NonEmptyArray<string>> {
  steps: Steps;
  step: Steps[number];
  children:
    | Array<React.ReactElement<StepProps<Steps>>>
    | React.ReactElement<StepProps<Steps>>;
}
export interface StepProps<Steps extends NonEmptyArray<string>> {
  name: Steps[number];
  onEnter?: () => void;
  children: React.ReactNode;
}
export type RouteFunnelProps<Steps extends NonEmptyArray<string>> = Omit<
  FunnelProps<Steps>,
  'steps' | 'step'
>;

export type FunnelOptionObject<Steps extends NonEmptyArray<string>> = {
  initialStep: Steps[number];
  targetKey: string;
};
export type StepChildElementProps = {
  goNextStep: () => Promise<boolean> | void;
  routerBack: () => void;
};
