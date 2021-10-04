import { VFC } from 'react';

type ErrorMessageProps = {
  message: string | undefined;
  position?: 'above' | 'below' | 'left';
};

const ErrorMessage: VFC<ErrorMessageProps> = ({
  message,
  position = 'above',
}) => (
  <>
    {message && (
      <div
        className={`ui pointing ${position} prompt label`}
        role="alert"
        aria-atomic="true"
      >
        {message}
      </div>
    )}
  </>
);

export default ErrorMessage;
