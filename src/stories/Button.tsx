import './button.css';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;

  disabled?:boolean;
  varient: "primary"|"secondary"|"danger"|"success"|"ghost"
}

/** Primary UI component for user interaction */
const Button = ({
  primary = false,
  varient="primary",
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor : varient==="primary" ? "purple" : varient==="danger" ?"red" : varient==="success"? "green" : varient==="secondary" ? "gray" : "royalblue" }}
      {...props}
    >
      {label}
    </button>
  );
};

export {Button}
