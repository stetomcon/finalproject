class CreateFashions < ActiveRecord::Migration[6.0]
  def change
    create_table :fashions do |t|
      t.string :image
      t.string :info
      t.string :category

      t.timestamps
    end
  end
end
