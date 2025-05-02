import { ref } from "vue";
import { useEventListener } from '@/event'

export function useMouse() {
  const x = ref(null);
  const y = ref(null);

  const updatePosition = (event) => {
    x.value = event.pageX;
    y.value = event.pageY;
  };

  useEventListener(window, 'mousemove',updatePosition);

  return { x, y };
}
