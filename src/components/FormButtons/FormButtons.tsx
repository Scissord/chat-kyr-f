import { FC } from 'react'

type FormButtonsProps = {
  isLoading: boolean;
  secondButtonFunction: () => void;
};

export const FormButtons: FC<FormButtonsProps> = (props) => {
  const { isLoading, secondButtonFunction } = props;

  return (
    <div className='col-span-3 flex items-center gap-3 ml-auto'>
      <button
        type="submit"
        className="btn btn-success text-white"
        disabled={isLoading}
      >
        {isLoading ? "Success..." : "Success"}
      </button>
      <button
        onClick={secondButtonFunction}
        className="btn btn-error text-white"
      >
        Reset
      </button>
    </div>
  );
};
