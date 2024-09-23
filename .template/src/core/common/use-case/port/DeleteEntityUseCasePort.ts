export type DeleteEntityUseCasePort<T extends { id: number }> = {
  id: T["id"]
}