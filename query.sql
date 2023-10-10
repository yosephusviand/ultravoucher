SELECT
	t1.id, 
	t1.`name`,
	t2.`name` as parent_name
FROM
	tb_satu t1
LEFT JOIN tb_satu t2 on t1.parent_id = t2.id;