import mahexLogo from "assets/images/mahex.png"
import postLogo from "assets/images/post.png"
import nafisExpress from "assets/images/nafisExpress.png"

export default function PostImage({ companyId }) {
    console.log(companyId);
    return (
        <img
            style={{ width: "32px", height: "32px" }}
            alt={
                {
                    1: "پست جمهوری اسلامی ایران",
                    2: "پست ماهکس",
                    3: "نفیس اکسپرس"
                }[companyId]
            }
            src={
                {
                    1: postLogo,
                    2: mahexLogo,
                    3: nafisExpress
                }[companyId]
            }
        />
    );
}
