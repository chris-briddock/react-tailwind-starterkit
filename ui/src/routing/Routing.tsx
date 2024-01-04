import Home from "../pages/Home";

type RoutingItem = {
    path: string;
    element: JSX.Element;
}

const Routing: RoutingItem[] = [
    {
        path: '/',
        element: <Home />
    }
];

export default Routing;