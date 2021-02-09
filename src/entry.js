// import "./pages/uikit/uikit.scss";

// import 'normalize.css';
// import './theme/scss/fonts.scss';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(require.context('./components', true, /\.(png|jpg|svg|gif|js|scss)$/)); 
requireAll(require.context('./pages', true, /\.(js|scss)$/));
requireAll(require.context('./theme', true, /\.(scss|png|svg|ico|webmanifest)$/));