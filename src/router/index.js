import {createRouter, createWebHistory} from 'vue-router';
import TrafficLightPage from "@/views/TrafficLightPage";
import RoadMapView from "@/views/RoadMapView";
import RoadView from "@/views/RoadView";

const routes = [
    {
        path: '/map',
        component: RoadMapView,
        children: [{
            path: 'road', component: RoadView
        }]
    },
    {path: '/tl/:id', component: TrafficLightPage},
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
