
export class Amiibo {
  constructor(
    public name: string,
    public character: string,
    public series: string,
    public game: string,
    public image: string,
    public release: object[]
  ) {}
}
