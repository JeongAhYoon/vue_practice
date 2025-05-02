import { onMounted, onUnmounted} from "vue";

export function useEventListener(target, eventType, callBack) {
    onMounted(() => {
        target.addEventListener(eventType, callBack);
      });
    
      onUnmounted(() => {
        target.removeEventListener(eventType, callBack);
      });
}