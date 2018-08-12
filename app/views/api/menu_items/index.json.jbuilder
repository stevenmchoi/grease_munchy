@menu_items.each do |date, menu_items_by_week|
    json.set! date do
        menu_items_by_week.each do |menu_item|
            if menu_item.date > Date.today.to_s
                json.set! menu_item.id do
                    json.partial! 'api/menu_items/menu_item', menu_item: menu_item
                end
            end
        end

        # json.array! menu_items_by_week.map do |menu_item|
        #     if date > Date.today.to_s
        #         json.partial! 'api/menu_items/menu_item', menu_item: menu_item
        #     end
        # end
    end
end