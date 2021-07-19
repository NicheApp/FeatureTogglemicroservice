package com.annr.Toggle2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.annr.Toggle2.model.Togglemodel;


@Repository
public interface Togglerepository extends JpaRepository<Togglemodel, Integer> {
 @Query("select  c from Togglemodel c where c.feature_name= :name")
	    public List<Togglemodel> findbyfeature(@Param("name") String name);
 
 @Modifying
 @Query("update  Togglemodel t set t.active = :active where t.feature_name= :feature_name AND t.custom_label= :custom_label AND t.custom_label_value= :custom_label_value")
 boolean Updateactive(@Param("active") boolean active,@Param("feature_name") String feature_name,@Param("custom_label") String custom_label,@Param("custom_label_value") String custom_label_value);
 

 @Query("select  c from Togglemodel c where c.custom_label= NULL AND c.custom_label_value= NULL")
 List<Togglemodel> getfeatures(@Param("nulls") String nulls);
	
}