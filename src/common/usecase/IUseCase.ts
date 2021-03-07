export interface IUseCase<TUseCasePort, TUseCaseResult> {
  execute(port?: TUseCasePort): Promise<TUseCaseResult>;
}
