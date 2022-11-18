import {createRouter, createWebHistory} from 'vue-router';
import RoadMap from "@/components/RoadMap";
import TrafficLightPage from "@/views/TrafficLightPage";

const routes = [
    {path: '/tl/:id', component: TrafficLightPage},
    {path: '/', component: RoadMap},
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;
