import { type RouteConfig, index, route } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;
export default [
    index("routes/home.tsx"),
    route("routes/second", "routes/second.tsx"),
    route("routes/invest-steps", "routes/invest-steps.tsx"),
    route("routes/results", "routes/proposals.tsx"),

] satisfies RouteConfig;