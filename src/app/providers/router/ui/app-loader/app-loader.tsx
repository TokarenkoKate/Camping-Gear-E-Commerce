import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { APP_LOADER_ANIMATION_SRC } from "@/app/providers/router/model/const/app";
import { UiText, UiVStack } from "@/shared/ui";
import cls from "./app-loader.m.scss";

/**
 * App start loading component
 */
export const AppLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className={cls.appLoader}
    >
      <UiVStack className={cls.appLoaderContent} align="center">
        <Player
          autoplay
          loop
          src={APP_LOADER_ANIMATION_SRC}
          className={cls.appLoaderPlayer}
        />
        <UiText variant="headingSm">Loading...</UiText>
      </UiVStack>
    </motion.div>
  );
};
