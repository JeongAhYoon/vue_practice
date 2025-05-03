import { unref } from "vue";

export function useFeature(mayBeRef) {
    const value = unref(mayBeRef);

    return value;
}