import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/button/Button';

interface IBugButtonProps {
	className?: string;
}

export const BugButton: FC<IBugButtonProps> = ({ className }) => {
  const [error, setError] = useState(false);
  const onThrow = () => setError(true);
  useEffect(() => {
    if (error) throw new Error();
  }, [error]);
  return (
    <Button
      onClick={onThrow}
    >
      throw error
    </Button>
  );
};
