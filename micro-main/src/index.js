import {registryApp, start} from "./framework";
import apps from "./apps.json";

registryApp(apps, {
    beforeLoad() {
        console.log("开始加载")
    },
    mounted() {
        console.log("挂载完成")
    },
    destroyed() {
        console.log("卸载完成")
    }
});

start()

