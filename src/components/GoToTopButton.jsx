import { FaArrowUp } from "react-icons/fa";
import '../App.css';
import { useEffect, useState } from "react";

export default function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const TopButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  const listinTOScroll = () => {
    let heightToHidden = 250;
    const winScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listinTOScroll)
  }, []);

  return (
    <>
      {isVisible && (
        <button onClick={TopButton} className="fixed bottom-10 right-8 p-3 rounded-lg bg-gray-800 text-white hover:bg-gray-900">
          <FaArrowUp className="icon" />
        </button>
      )}
    </>
  );
}
