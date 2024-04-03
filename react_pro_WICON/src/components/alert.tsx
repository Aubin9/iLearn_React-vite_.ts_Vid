interface Props {
  text: string;
  onClose: () => void;
}
const Alert = ({ text, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      Alert {text}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
