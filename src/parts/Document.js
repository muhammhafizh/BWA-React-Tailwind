import useModalDom from "../helpers/hooks/useModalDom";
import useScrollToTop from "../helpers/hooks/useScrollToTop";
import useScrollAnchor from "../helpers/hooks/useScrollAnchor";

export default function Document({ children }) {
  useModalDom();
  useScrollAnchor();
  useScrollToTop();
  return children;
}
