package com.annr.Toggle2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.annr.Toggle2.model.Togglemodel;


@Repository
public interface Togglerepository extends JpaRepository<Togglemodel, Integer> {
	// @Query("select * from toggletable c where c.feature_name=1")
	  //  public List<Togglemodel> findByParentId(int id);
}