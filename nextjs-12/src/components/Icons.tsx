import { IconType } from "react-icons"
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai"
import { FaFacebookSquare, FaPinterest } from "react-icons/fa"
import { BsSearch, BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs"
import { IoClose } from "react-icons/io5"

export const InstagramIcon: IconType = (props) => {
   return (
      <AiFillInstagram 
         {...props}
      />
   )
}

export const FacebookIcon: IconType = (props) => {
   return (
      <FaFacebookSquare 
         {...props}
      />
   )
}

export const TwitterIcon: IconType = (props) => {
   return (
      <AiOutlineTwitter 
         {...props}
      />
   )
}

export const YoutubeIcon: IconType = (props) => {
   return (
      <AiFillYoutube 
         {...props}
      />
   )
}

export const PinterestIcon: IconType = (props) => {
   return (
      <FaPinterest 
         {...props}
      />
   )
}

export const SearchIcon: IconType = (props) => {
   return (
      <BsSearch {...props}/>
   )
}

export const CloseIcon: IconType = (props) => {
   return (
      <IoClose {...props}/>
   )
}

export const ArrowRightIcon: IconType = (props) => {
   return (
      <BsArrowRightShort {...props}/>
   )
}

export const ArrowLeftIcon: IconType = (props) => {
   return (
      <BsArrowLeftShort {...props}/>
   )
}