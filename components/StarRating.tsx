import star from "@/star.svg";
import outlinedStar from "@/star-outlined.svg";
import Image from "next/image";

export function StarRating(props: { quantity: number }) {
  const filledStars = Array.from({ length: props.quantity }).map(
    (el, index) => (
      <Image key={index} alt="star" src={star} width={20} height={20} />
    )
  );
  const outlinedStars =
    props.quantity < 5
      ? Array.from({ length: 5 - props.quantity }).map((el, index) => (
          <Image
            key={index}
            alt="star"
            src={outlinedStar}
            width={20}
            height={20}
          />
        ))
      : null;
  return (
    <div className="grid grid-cols-2 gap-1">
      <div className="grid grid-cols-[repeat(5,_20px)] gap-1">
        {filledStars}
        {outlinedStars && outlinedStars}
      </div>
      <div className="leading-5 h-5">{props.quantity}</div>
    </div>
  );
}
