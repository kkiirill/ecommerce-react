import { memo, useCallback } from "react";
import FacebookLogin from "react-facebook-login";

interface Props {
  addUser: (user: any) => void;
}

export const Facebook:React.FC<Props> = memo(({ addUser}: Props) => {
  const responseFacebook = useCallback((response: any) => {
    try {
      if (response.accessToken) {
        const userObect = {
          id: response.id,
          name: response.name,
          photo: response.picture.data.url,
        };
        addUser(userObect)
      }
    } catch (error) {
      console.log(error);
    }
  }, [addUser]);

  return (
    <div>
      <FacebookLogin
        appId="451160883557645"
        textButton="Facebook"
        fields="name,email,picture"
        scope="public_profile,user_friends"
        callback={responseFacebook}
        cssClass="facebook__button"
        icon="fa-facebook"
      />
    </div>
  );
});
