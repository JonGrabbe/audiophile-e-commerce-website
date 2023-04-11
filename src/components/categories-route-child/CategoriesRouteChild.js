import Root from "../../routes/root";
import HeaderText from "../../routes/components/header-text/HeaderText";
import CategoriesPage from "../categoriesPage/CategoriesPage";
import productsData from "../../data/headphones-products";

export default function CategoriesRouteChild(props) {
    return (
        <Root headerContent={<HeaderText text={props.category} />}  >
            <CategoriesPage productsData={productsData} ProductType={props.category} />
        </Root>
    )
}