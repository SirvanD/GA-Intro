require 'pg'


def db_query(sql, params = [])
  
    conn = PG.connect(dbname: 'goodfoodhunting')
    result = conn.exec_params(sql, params) #exec_params always returns an array
    conn.close
    return result
  
  end


#   MVC
# model view control
# separation of concerns

def all_dishes()

    result = db_query("select * from dishes order by name;")
  end
  
  
  def create_dish(name, image_url, user_id)
  
    sql = "insert into dishes (name, image_url, user_id) values ($1, $2, $3);"
  
    db_query(sql,[name, image_url, user_id])
  
  end
  
  
  
  def delete_dish(id)

    db_query("delete from dishes where id = $1;", [id])
  
  end
  
  
  def update_dish(name, image_url, id)
  
    sql = "update dishes set name = $1, image_url = $2 where id = $3;"

    db_query(sql, [name,image_url,id])

  end

#   restful convention for urls
