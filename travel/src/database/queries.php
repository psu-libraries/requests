<?php

function getColumnNames($conn, $tablename) {

    $result = [];

    try {
      $qry = $conn->query("SELECT * FROM $tablename LIMIT 1");
      $info = $qry->fetch_fields();

      foreach ($info as $key => $value):
        array_push($result, $value->name);
      endforeach;

    } catch (Exception $e) {
        return $result = [
          "type" => "error",
          "message" => $e->error
        ];
    }

    return $result;
}

function escape_mysql_identifier($field) {
  return "'".str_replace("'", "'", $field)."'";
}

function prepared_query($conn, $sql, $params, $types = "") {
  $types = $types ?: str_repeat("s", count($params));
  $stmt = $conn->prepare($sql);
  $stmt->bind_param($types, ...$params);
  $stmt->execute();
  return $stmt;
}


function insert($conn, $table, $data) {
    $keys = array_keys($data);
    $keys = array_map('escape_mysql_identifier', $keys);
    $fields = implode(",", $keys);
    $table = escape_mysql_indentifier($table);
    $placeholders = str_repeat('?,', count($keys) - 1) . '?';
    $sql = "INSERT INTO $table ($fields) VALUES ($placeholders)";
    prepared_query($conn, $sql, array_values($data));





/*    $tablename = $arr['tablename'];
    $columns = implode(", ", $arr['colnames']);
    $placeholders = '?';
    $paramtypes = $arr['paramtypes'];
    $values = implode(", ", $arr['values']);

    $placeholders = str_repeat('?,', count)
    for ($a = 1; $a < count($arr['colnames']); $a++):
        $placeholders = $placeholders . ',?';
    endfor;

    try {
      $sql = "INSERT INTO $tablename ($columns) VALUES ($placeholders)";
      $stmt = $conn->prepare($sql);
      $stmt->bind_param("$paramtypes", $values);
      $stmt->execute();
      $result = $stmt->insert_id;
    } catch(Exception $e) {
      return $result = [
          "type" => "error",
          "message" => $e->error
        ];
    }

    return $result;
*/
}
