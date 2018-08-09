export const fetchAllMenuItems = () => 
    $.ajax({
        method: "GET",
        url: "api/menu_items"
    });
