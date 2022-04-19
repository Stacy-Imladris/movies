import s from './PaginationButton.module.scss';

export const PaginationButton = ({
  onPageChanged,
  buttonName,
  value,
  isSelected = false,
}) => {
  const onClickHandle = () => {
    onPageChanged(value);
  };

  const buttonStyle = `${isSelected && s.selectedPage} ${s.button}`;

  return (
    <button type="button" tabIndex={0} onClick={onClickHandle} className={buttonStyle}>
      {buttonName}
    </button>
  );
};
