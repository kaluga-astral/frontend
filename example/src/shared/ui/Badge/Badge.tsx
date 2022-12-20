export type BadgeProps = {
  isShow: boolean;
  color: string;
};

export const Badge = ({ isShow, color }: BadgeProps) => {
  if (!isShow) {
    return null;
  }

  return <p style={{ color }}>Badge</p>;
};
