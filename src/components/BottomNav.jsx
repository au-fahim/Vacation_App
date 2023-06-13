import { BiHeart, BiSearch, BiUserCircle } from "react-icons/bi";

export default function BottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 z-50 w-full border-t">
      <div className="main_inner">
        <nav className="bottom_nav">
          <button>
            <BiSearch size={30} />
            <span>Explore</span>
          </button>
          <button>
            <BiHeart size={30} />
            <span>Wishlists</span>
          </button>
          <button>
            <BiUserCircle size={30} />
            <span>Log in</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
