export type LogEventCreator<
  Feature extends string,
  Page extends string,
  At extends string,
  Target extends string,
  Action extends string,
  AnotherObj extends Record<string, any> & { type: string },
  Glue extends string = '_',
> = {
  feature: Feature;
  page: Page;
  at: At;
  target: Target;
  action: Action;
  glue: Glue;
  eventName: `${Feature}${Glue}${Target}${Glue}${Action}`;
  eventNameTuple: readonly [Feature, Target, Action];
  eventPath: `${Feature}${Glue}${Page}${Glue}${At}${Glue}${Target}`;
  eventPathTuple: readonly [Feature, Page, At, Target];
  props: {
    eventName: readonly [Feature, Target, Action];
    eventPath: readonly [Feature, Page, At, Target];
  };
  logEvent: {
    eventName: `${Feature}${Glue}${Target}${Glue}${Action}`;
    eventPath: `${Feature}${Glue}${Page}${Glue}${At}${Glue}${Target}`;
  } & AnotherObj;
  logEventParam: {
    eventName: readonly [Feature, Target, Action];
    eventPath: readonly [Feature, Page, At, Target];
  } & AnotherObj;
};
export type DefaultLogEventType = LogEventCreator<
  string,
  string,
  string,
  string,
  string,
  { type: string },
  '_'
>;
