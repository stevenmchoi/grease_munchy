@menu_items.each do |date, menu_items_by_week|
    json.set! date do
        json.array! menu_items_by_week.map do |menu_item|
            if date > Date.today.to_s
                json.partial! 'api/menu_items/menu_item', menu_item: menu_item
            end
        end
    end
end