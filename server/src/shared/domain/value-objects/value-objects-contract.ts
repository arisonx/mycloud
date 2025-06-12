export abstract class ValueObject<Props = any> {
  public readonly props: Props;

  constructor(props: Props) {
    this.props = props;
  }

  abstract getValue(): Props;
}
